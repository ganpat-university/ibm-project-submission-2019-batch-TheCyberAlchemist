import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
interface Heading {
    title: string;
    icon: string;
    routes?: RouteInfo[];
}
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
interface sidebar {
    headings: Heading[], routes: RouteInfo[]
}

export const my_sidebar: sidebar = {
    routes: [
        // { path: '/homepage', title: 'Homepage', icon: 'nc-bank', class: '' },
        // { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
        // { path: '/vendor', title: 'Vendors', icon: 'nc-circle-10', class: '' },
        // { path: '/item_description', title: 'Items', icon: 'nc-circle-10', class: '' },
        // { path: '/wo', title: 'Work Orders', icon: 'nc-circle-10', class: '' },
        // { path: '/po', title: 'Purchase Orders', icon: 'nc-circle-10', class: '' },
        // { path: '/grn', title: 'GRN', icon: 'nc-circle-10', class: '' },
        { path: '/presentation/comp-table', title: 'Comparision Table', icon: 'nc-tile-56', class: '' },
        { path: '/presentation/graphs', title: 'Graphs', icon: 'nc-chart-pie-36', class: '' },

    ],
    headings: [
         {
            title: "Apps",
            icon: 'nc-world-2',
            routes: [
                { path: '/presentation/sanernow', title: 'SanerNow', icon: 'nc-app', class: '' },
                { path: '/presentation/intruder', title: 'Intruder', icon: 'nc-app', class: '' },
                { path: '/presentation/manage-engine', title: 'Manage-Engine', icon: 'nc-app', class: '' },
                { path: '/presentation/qualys', title: 'Qualys', icon: 'nc-app', class: '' },
                { path: '/presentation/nessus', title: 'Nessus', icon: 'nc-app', class: '' },
            ]
        }
    ],
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/icons', title: 'Icons', icon: 'nc-diamond', class: '' },
    { path: '/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
    { path: '/user', title: 'User Profile', icon: 'nc-single-02', class: '' },
    { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
    { path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' },
];

@Component({
    // moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ["sidebar.component.scss"]
})

export class SidebarComponent implements OnInit {
    my_sidebar!: sidebar;
    ngOnInit() {
        this.my_sidebar = my_sidebar;
    }

    // public menuItems!: any[];
    // ngOnInit() {
    //     this.menuItems = ROUTES.filter(menuItem => menuItem);
    // }

}
/*
interface FoodNode {
    name: string;
        children?: FoodNode[];
    }
    
    const TREE_DATA: FoodNode[] = [
        {
            name: 'Fruit',
            children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
        },
        {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
                },
                {
                    name: 'Orange',
                    children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
                },
            ],
        },
    ];
    ///////////////// in component
    treeControl = new NestedTreeControl<FoodNode>(node => node.children);
    dataSource = new MatTreeNestedDataSource<FoodNode>();
    
    constructor() {
        this.dataSource.data = TREE_DATA;
    }
    
    hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
    ///////////////// in html
    <mat-tree [dataSource]="dataSource" [treeControl]="treeControl" class="example-tree">
    <!-- This is the tree node template for leaf nodes -->
    <!-- There is inline padding applied to this node using styles.
    This padding value depends on the mat-icon-button width. -->
    <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
      {{node.name}}
    </mat-tree-node>
    <!-- This is the tree node template for expandable nodes -->
    <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
      <div class="mat-tree-node">
        <button mat-icon-button matTreeNodeToggle [attr.aria-label]="'Toggle ' + node.name">
          <mat-icon class="mat-icon-rtl-mirror">
            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
          </mat-icon>
        </button>
        {{node.name}}
      </div>
      <!-- There is inline padding applied to this div using styles.
          This padding value depends on the mat-icon-button width.  -->
      <div [class.example-tree-invisible]="!treeControl.isExpanded(node)" role="group">
        <ng-container matTreeNodeOutlet></ng-container>
      </div>
    </mat-nested-tree-node>
  </mat-tree>

*/