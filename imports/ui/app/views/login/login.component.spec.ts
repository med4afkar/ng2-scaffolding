import '../../polyfills.spec.ts';

import { getTestBed, TestBed, async } from '@angular/core/testing';
import { Login } from './login.component';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { spy } from 'sinon';

describe(`Login`, () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Login], //declare test component
        })
            .compileComponents(); //compile html and css
    }));

    afterEach(() => {
        getTestBed().resetTestingModule();
    });

    it('should display `a` element', () => {
        const fixture = TestBed.createComponent(Login);

        fixture.detectChanges();

        const a = fixture.debugElement.query(By.css('a'));

        expect(a.nativeElement.textContent).to.equal('Add');
    });

    it('should render styles correctly', () => {
        const fixture = TestBed.createComponent(Login);

        fixture.detectChanges();

        const addBtn = fixture.debugElement.query(By.css('.addBtn'));

        const {
            color
        } = getComputedStyle(addBtn.nativeElement);

        expect(color).to.equal('rgb(0, 255, 0)');
    })

});
