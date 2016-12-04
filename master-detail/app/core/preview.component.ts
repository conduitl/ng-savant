import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
@Component({
    selector: 'ct-preview',
    template: `
        <h3>Preview</h3>
        <h4>active feature: {{ featureUrl }}</h4>
    `
})
export class PreviewComponent implements OnInit { 
    // Challenges
    // - how to know whether to get person or to get project
    // - how to keep the currently selected object from the other feature
    //   selected until a new one is selected even as user toggles between features
    // Router Qs 
    // how does one outlet subscribe to the state of another outlet?
    state: ActivatedRouteSnapshot;
    featureUrl: string;
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        this.router.events.subscribe((e) => {
            if (e.constructor.name === "NavigationEnd") {
                this.featureUrl = this.route.root.firstChild.snapshot.url[0].path;
            }
        });
        // this.route.root.firstChild.url.subscribe( u => {
        //     this.featureUrl = u[0].path;
        // });
    }
}