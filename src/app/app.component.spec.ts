import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ButtonAddComponent } from './core/components/button-add/button-add.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        SidebarComponent,
        ButtonAddComponent
      ],
      imports:[
        AppModule,
        MaterialModule,],
      
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
