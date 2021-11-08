import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('My application', () => {
  it('should calculate 2 + 2 successfully', () => {
    // Given
    const a = 2;
    const b = 2;

    // When
    const result = a + b;

    // Then
    expect(result).toBe(4);
  });
});

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should increase count by 3 if clicked 3 times', () => {
    // Given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const button = fixture.debugElement.query(By.css('.increase'));
    const count = fixture.debugElement.query(By.css('.count'));

    // When (clicked 3 times)
    button.triggerEventHandler('click', null);
    button.triggerEventHandler('click', null);
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Then
    expect((count.nativeElement as HTMLParagraphElement).textContent?.trim()).toBe('3')
  });


  it('should reset count if reset button is pressed', () => {
    // Given
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.count = 10;
    const button = fixture.debugElement.query(By.css('.reset'));
    const count = fixture.debugElement.query(By.css('.count'));

    // When (reset)
    fixture.detectChanges();
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Then
    expect((count.nativeElement as HTMLParagraphElement).textContent?.trim()).toBe('0')
  });

});
