import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: 'title',
    name: 'MAIN'
  },
  {
    state: '/',
    name: 'Dashboard',
    type: 'link',
    icon: ''
  },
  {
    state: 'myfeed',
    name: 'My Feed',
    type: 'link',
    icon: ''
  },
  {
    state: 'post',
    name: 'Posts',
    type: 'link',
    icon: ''
  },
  {
    state: 'groups',
    name: 'All Groups',
    type: 'sub',
    icon: '',
    children: [
      {state: 'signin', name: 'Hr Resources'},
      {state: 'signup', name: 'News'},
      {state: 'forgot', name: 'Events'},
      {state: 'lockscreen', name: 'LOCKSCREEN'},
    ]
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'COMMUNITY'
  },
  {
    state: 'social',
    name: 'People',
    type: 'link',
    icon: ''
  },
  {
    state: 'social',
    name: 'Forums',
    type: 'link',
    icon: ''
  },
  {
    state: 'activity',
    name: 'Site-wide Activity',
    type: 'link',
    icon: ''
  },
  {
    state: 'groups',
    name: 'Groups',
    type: 'link',
    icon: '',
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'APPlICATIONS'
  },
  {
    state: 'calendar',
    name: 'Calendar',
    type: 'link',
    icon: ''
  },
  {
    state: 'messages',
    name: 'MESSAGES',
    type: 'link',
    icon: ''
  },
  {
    state: 'taskboard',
    name: 'TASKBOARD',
    type: 'link',
    icon: '',
  },
  {
    state: 'gallery',
    name: 'Photos',
    type: 'link',
    icon: ''
  },
  {
    state: 'filemanager',
    name: 'File Manager',
    type: 'link',
    icon: '',
  },
  {
    state: 'buggedout',
    name: 'Issue Tracker',
    type: 'link',
    icon: ''
  },
  {
    state: 'software',
    name: 'Softwares',
    type: 'link',
    icon: ''
  },
  {
    state: 'booking',
    name: 'Bookings',
    type: 'link',
    icon: ''
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'SUPPORT'
  },
  {
    state: 'documentation',
    name: 'Knowledge Base',
    type: 'link',
    icon: ''
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
