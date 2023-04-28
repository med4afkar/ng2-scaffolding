import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { KanbanCard, Comment, ListName, Task } from 'imports/api/kanban/kanban';
import { Member } from 'imports/api/kanban/member';
import { Kanban } from '../../views/kanban/kanban.component';
import { MemberService } from 'imports/ui/app/services/member.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { KanbanService } from 'imports/ui/app/services/kanban.service';

@Component({
    selector: 'kanban-sidebar',
    templateUrl: './kanban-sidebar.component.html',
    styleUrls: ['./kanban-sidebar.component.scss']
})
export class KanbanSidebarComponent implements OnDestroy {
    card: KanbanCard = {id:'' ,taskList: {title: 'Untitled Task List', tasks: []}};

    listId: string = '';

    filteredAssignees: Member[] = [];

    assignees: Member[] = [];

    newComment: Comment = { id: '123', name: 'Jane Cooper', text: '' };

    newTask: Task = { text: '', completed: false };

    comment: string = '';

    taskContent: string = '';

    timeout: any = null;

    showTaskContainer: boolean = false;

    menuItems: MenuItem[] = [];

    listNames: ListName[] = [];

    cardSubscription: Subscription;

    listSubscription: Subscription;

    listNameSubscription: Subscription;

    @ViewChild('inputTitle') inputTitle!: ElementRef;

    @ViewChild('inputTaskListTitle') inputTaskListTitle!: ElementRef;
    
    constructor(public parent: Kanban, private memberService: MemberService, private kanbanService: KanbanService) {
        this.memberService.getMembers().then(members => this.assignees = members);

        this.cardSubscription = this.kanbanService.selectedCard$.subscribe(data => this.card = data);
        this.listSubscription = this.kanbanService.selectedListId$.subscribe(data => this.listId = data);
        this.listNameSubscription = this.kanbanService.listNames$.subscribe(data => this.listNames = data);
    }

    ngOnDestroy() {
        this.cardSubscription.unsubscribe();
        this.listSubscription.unsubscribe();
        this.listNameSubscription.unsubscribe();
        clearTimeout(this.timeout);
    }

    close() {
        this.parent.sidebarVisible = false;
    }

    filterAssignees(event: any) {
        let filtered: Member[] = [];
        let query = event.query;

        for (let i = 0; i < this.assignees.length; i++) {
            let assignee = this.assignees[i];
            if (assignee.name && assignee.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(assignee);
            }
        }

        this.filteredAssignees = filtered;
    }

    onComment(event: Event) {
        event.preventDefault();
        if (this.comment.trim().length > 0) {
            this.newComment.text = this.comment;
            this.card.comments.unshift(this.newComment);
            this.comment = '';
        }
    }

    onSave() {
        this.parent.sidebarVisible = false;
    }
    
    onMove(listId: string) {
        this.kanbanService.moveCard(this.card, listId, this.listId);
    }

    onDelete() {
        this.kanbanService.deleteCard(this.card.id || '', this.listId);
        this.parent.sidebarVisible = false;
    }

    addTaskList() {
        this.showTaskContainer = !this.showTaskContainer;

        if (!this.showTaskContainer) {
            return;
        }
        else if (!this.card.taskList) {
            let id = this.kanbanService.generateId();
            this.card = { ...this.card, taskList: { id: id, title: 'Untitled Task List', tasks: []  } };
        }
    }

    addTask(event: Event) {
        event.preventDefault();
        if (this.taskContent.trim().length > 0) {
            this.newTask = { text: this.taskContent, completed: false };
            this.card.taskList.tasks.unshift(this.newTask);
            this.taskContent = '';
            this.calculateProgress();
        }
    }

    focus(arg: number) {
        if (arg == 1) {
            this.timeout = setTimeout(() => this.inputTitle.nativeElement.focus(), 1);
        }
        if (arg == 2) {
            this.timeout = setTimeout(() => this.inputTaskListTitle.nativeElement.focus(), 1);
        }
    }

    calculateProgress() {
        if(this.card.taskList) {
            let completed = this.card.taskList.tasks.filter(t => t.completed).length;
            this.card.progress = Math.round(100 * (completed / this.card.taskList.tasks.length));
        }
    }
   
}
