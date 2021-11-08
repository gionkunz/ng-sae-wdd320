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

  it('should create the app', () => {
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

  /*it(`should have as title 'counter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('counter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('counter app is running!');
  });*/
});
