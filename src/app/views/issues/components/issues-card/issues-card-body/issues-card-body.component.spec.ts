import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesCardBodyComponent } from './issues-card-body.component';

describe('IssuesCardBodyComponent', () => {
  let component: IssuesCardBodyComponent;
  let fixture: ComponentFixture<IssuesCardBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesCardBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuesCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
