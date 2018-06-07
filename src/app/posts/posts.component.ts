import {Component, OnInit} from '@angular/core';
import { moveIn, fallIn, fadeInOut, growShrink } from 'angular-router-animations';
import {Post} from "./posts.model";
import {PostsService} from "./posts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';


export interface Person {
  name: string;
}
export interface DemoColor {
  name: string;
  color: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [moveIn(), fallIn(), fadeInOut(), growShrink()],
})
export class PostsComponent implements OnInit {
  tabIndex = 0;
  visible = true;
  color = '';
  selectable = true;
  removable = true;
  addOnBlur = true;
  message = '';

  step = 0;

  public posts;
  constructor(private postsService: PostsService, private router: ActivatedRoute) {
  }

  ngOnInit(){
  }

  getPostById (){
    this.router.params.subscribe((params) => {
      // let id = params['id'];
      let id = 3;

      this.postsService.getPost(id)
        .subscribe(res=>this.posts = res );
    })
  }

  getAllPostContent () {
    this.postsService.getAllPosts()
      .subscribe(res => {
          this.posts = res;
          console.log('query all post ~~',this.posts);
        },
        error => {
          console.log(`error get post  content :: ${JSON.stringify(error)}`);
        }
      )
  }
  // Enter, comma, semi-colon
  separatorKeysCodes = [ENTER, COMMA, 186];

  selectedPeople = null;

  people: Person[] = [
    { name: 'Events' },
    { name: 'News' }
  ];

  availableColors: DemoColor[] = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  selectedColors: any[] = ['Primary', 'Warn'];
  selectedColor = 'Accent';

  displayMessage(message: string): void {
    this.message = message;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.people.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(person: Person): void {
    const index = this.people.indexOf(person);

    if (index >= 0) {
      this.people.splice(index, 1);
    }
  }

  removeColor(color: DemoColor) {
    let index = this.availableColors.indexOf(color);

    if (index >= 0) {
      this.availableColors.splice(index, 1);
    }

    index = this.selectedColors.indexOf(color.name);

    if (index >= 0) {
      this.selectedColors.splice(index, 1);
    }
  }

  toggleVisible(): void {
    this.visible = false;
  }

  messages: any[] = [
    {
      from: 'Hanson',
      subject: 'Brunch?',
      message: 'Did you want to go on Sunday? I was thinking that might work.',
      image: '//www.gravatar.com/avatar/51d4780a028c7182c5cc4d78462808c0?s=200&r=pg&d=mm'
    },
    {
      from: 'Ayisi',
      subject: 'Summer BBQ',
      message: 'Wish I could come, but I have some prior obligations.',
      image: '//www.gravatar.com/avatar/e619f5dad40ff1c5845c70bf407a16f7?s=200&r=pg&d=mm'
    },
    {
      from: 'Info',
      subject: 'Oui oui',
      message: 'Do you have Paris reservations for the 15th? I just booked!',
      image: '//www.gravatar.com/avatar/b47216dfe3624c644aec3111e2d83bed?s=200&r=pg&d=mm'
    }
  ];

  links: any[] = [
    {name: 'Inbox'},
    {name: 'Outbox'},
    {name: 'Spam'},
    {name: 'Trash'}

  ];
}
