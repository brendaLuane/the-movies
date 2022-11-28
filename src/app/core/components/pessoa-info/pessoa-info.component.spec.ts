import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaInfoComponent } from './pessoa-info.component';

describe('PessoaInfoComponent', () => {
  let component: PessoaInfoComponent;
  let fixture: ComponentFixture<PessoaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
