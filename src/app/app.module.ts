import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosFilterStore } from './todos-filter.store';
import { TodosStore } from './todos.store';
import { TodosPageComponent } from './todos-page/todos-page.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    TodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodosFilterStore, TodosStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
