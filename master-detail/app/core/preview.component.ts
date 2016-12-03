import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
@Component({
    selector: 'ct-preview',
    template: `
        <h3>Preview</h3>
    `
})
export class PreviewComponent { 
    // Challenges
    // - how to know whether to get person or to get project
    // - how to keep the currently selected object from the other feature
    //   selected until a new one is selected even as user toggles between features

    // Technical Q / A
    // How to I get the url from ActivateRoute?
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ){}
    ngOnInit() {
        

    }
    

}