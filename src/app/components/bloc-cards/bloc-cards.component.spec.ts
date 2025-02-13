import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocCardsComponent } from './bloc-cards.component';

describe('BlocCardsComponent', () => {
  let component: BlocCardsComponent;
  let fixture: ComponentFixture<BlocCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
