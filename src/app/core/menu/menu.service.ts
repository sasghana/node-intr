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
    icon: 'explore '
  },
  {
    state: 'myfeed',
    name: 'My Feed',
    type: 'link',
    icon: 'show_chart'
  },
  {
    state: 'post',
    name: 'Posts',
    type: 'link',
    icon: 'photo'
  },
  {
    state: 'like',
    name: 'Likes',
    type: 'link',
    icon: 'looks_3'
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
    icon: 'contacts'
  },
  {
    state: 'social',
    name: 'Forums',
    type: 'link',
    icon: 'contacts'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'APPS'
  },
  {
    state: 'calendar',
    name: 'Calendar',
    type: 'link',
    icon: 'date_range'
  },
  {
    state: 'messages',
    name: 'MESSAGES',
    type: 'link',
    icon: 'email'
  },
  {
    state: 'taskboard',
    name: 'TASKBOARD',
    type: 'link',
    icon: 'view_column',
  },
  {
    type: 'divider'
  },
  {
    state: 'documentation',
    name: 'DOCS',
    type: 'link',
    icon: 'help'
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
