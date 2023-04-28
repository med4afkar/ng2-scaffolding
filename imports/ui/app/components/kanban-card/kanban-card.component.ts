import { Component, Input, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { KanbanCard } from 'imports/api/kanban/kanban';
import { KanbanService } from 'imports/ui/app/services/kanban.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'kanban-card',
    templateUrl: './kanban-card.component.html'
})
export class KanbanCardComponent implements OnDestroy {
    @Input() card!: KanbanCard;

    @Input() listId!: string;

    menuItems: MenuItem[] = [
        {
           label:'File',
           icon:'pi pi-fw pi-file',
           items:[
              {
                 label:'New',
                 icon:'pi pi-fw pi-plus',
                 items:[
                    {
                       label:'Bookmark',
                       icon:'pi pi-fw pi-bookmark'
                    },
                    {
                       label:'Video',
                       icon:'pi pi-fw pi-video'
                    },

                 ]
              },
              {
                 label:'Delete',
                 icon:'pi pi-fw pi-trash'
              },
              {
                 separator:true
              },
              {
                 label:'Export',
                 icon:'pi pi-fw pi-external-link'
              }
           ]
        },
        {
           label:'Edit',
           icon:'pi pi-fw pi-pencil',
           items:[
              {
                 label:'Left',
                 icon:'pi pi-fw pi-align-left'
              },
              {
                 label:'Right',
                 icon:'pi pi-fw pi-align-right'
              },
              {
                 label:'Center',
                 icon:'pi pi-fw pi-align-center'
              },
              {
                 label:'Justify',
                 icon:'pi pi-fw pi-align-justify'
              },

           ]
        },
        {
           label:'Users',
           icon:'pi pi-fw pi-user',
           items:[
              {
                 label:'New',
                 icon:'pi pi-fw pi-user-plus',

              },
              {
                 label:'Delete',
                 icon:'pi pi-fw pi-user-minus',

              },
              {
                 label:'Search',
                 icon:'pi pi-fw pi-users',
                 items:[
                    {
                       label:'Filter',
                       icon:'pi pi-fw pi-filter',
                       items:[
                          {
                             label:'Print',
                             icon:'pi pi-fw pi-print'
                          }
                       ]
                    },
                    {
                       icon:'pi pi-fw pi-bars',
                       label:'List'
                    }
                 ]
              }
           ]
        },
        {
           label:'Events',
           icon:'pi pi-fw pi-calendar',
           items:[
              {
                 label:'Edit',
                 icon:'pi pi-fw pi-pencil',
                 items:[
                    {
                       label:'Save',
                       icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                       label:'Delete',
                       icon:'pi pi-fw pi-calendar-minus'
                    },

                 ]
              },
              {
                 label:'Archieve',
                 icon:'pi pi-fw pi-calendar-times',
                 items:[
                    {
                       label:'Remove',
                       icon:'pi pi-fw pi-calendar-minus'
                    }
                 ]
              }
           ]
        },
        {
           separator:true
        },
        {
           label:'Quit',
           icon:'pi pi-fw pi-power-off'
        }
    ];;

    subscription: Subscription;

    constructor(private kanbanService: KanbanService) {
        this.subscription = this.kanbanService.lists$.subscribe(data => {
            // let subMenu = data.map(d => ({ id: d.listId, label: d.title, command: () => this.onMove(d.listId) }));
            // this.generateMenu(subMenu);
        })
    }

    parseDate(dueDate: string) {
        return new Date(dueDate).toDateString().split(' ').slice(1, 3).join(' ');
    }

    onDelete() {
        this.kanbanService.deleteCard(this.card.id, this.listId);
    }

    onCopy() {
        this.kanbanService.copyCard(this.card, this.listId);
    }

    onMove(listId: string) {
        this.kanbanService.moveCard(this.card, listId, this.listId);
    }

    // generateMenu(subMenu: any[]) {
    //     this.menuItems = [
    //         { label: 'Copy card', command: () => this.onCopy() },
    //         { label: 'Move card', items: subMenu },
    //         { label: 'Delete card', command: () => this.onDelete() }
    //     ];
    // }

    generateTaskInfo() {
        let total = this.card.taskList.tasks.length;
        let completed = this.card.taskList.tasks.filter(t => t.completed).length;
        return `${completed} / ${total}`;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
