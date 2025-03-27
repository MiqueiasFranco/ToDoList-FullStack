import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemsucessoComponent } from './mensagemsucesso.component';

describe('MensagemsucessoComponent', () => {
  let component: MensagemsucessoComponent;
  let fixture: ComponentFixture<MensagemsucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagemsucessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemsucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
