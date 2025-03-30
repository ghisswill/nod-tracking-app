import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocMapsComponent } from './bloc-maps.component';

describe('BlocMapsComponent', () => {
  let component: BlocMapsComponent;
  let fixture: ComponentFixture<BlocMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocMapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
