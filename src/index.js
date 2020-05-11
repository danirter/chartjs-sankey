'use strict';

import Chart from 'chart.js';
import Controller from './controller';

Chart.controllers.sankey = Controller;

Chart.defaults.sankey = {
	hover: {
		mode: 'nearest',
		intersect: true
	},
	datasets: {
		animation: (ctx) => {
			let delay = 0;
			let duration = 0;
			const parsed = ctx.chart.getDatasetMeta(ctx.datasetIndex).controller.getParsed(ctx.dataIndex);
			if (parsed) {
				delay = parsed.x * 500 + ctx.dataIndex * 20;
				duration = (parsed._custom.x - parsed.x) * 200;
			}
			return {
				numbers: {
					type: 'number',
					properties: ['x', 'y', 'x2', 'y2', 'height']
				},
				progress: {
					easing: 'linear',
					duration,
					delay
				},
				colors: {
					type: 'color',
					properties: ['colorFrom', 'colorTo'],
				},
				hide: {
					colors: {
						type: 'color',
						properties: ['colorFrom', 'colorTo'],
						to: 'transparent'
					}
				},
				show: {
					colors: {
						type: 'color',
						properties: ['colorFrom', 'colorTo'],
						from: 'transparent'
					}
				}
			};
		},
		color: () => '#efefef'
	},
	tooltips: {
		mode: 'nearest',
		intersect: true
	},
	legend: {
		display: false
	},
	scales: {
		x: {
			type: 'linear',
			display: false,
			min: 0,
			offset: true
		},
		y: {
			type: 'linear',
			display: false,
			min: 0,
			reverse: true,
			offset: true
		}
	}
};
