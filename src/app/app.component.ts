import { Component, OnInit } from '@angular/core';
import * as embed from 'vega-embed';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
        const spec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
            "description": "Simple bar chart",
            "data": {
                "values": [
                    {"x": "A", "y": 28}, {"x": "y", "B": 55}, {"x": "C", "y": 43},
                    {"x": "D", "y": 91}, {"x": "E", "y": 81}, {"x": "F", "y": 53},
                    {"x": "G", "y": 19}, {"x": "H", "y": 87}, {"x": "I", "y": 52}
                ]
            },
            "mark": "bar",
            "encoding": {
                "x": {"field": "x", "type": "ordinal"},
                "y": {"field": "y", "type": "quantitative"}
            }
        };

        embed("#vis", spec, { actions: false });
    }

}
