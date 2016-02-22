const
addStraat = require('../js/complex-huizen').addStraat,
straat = {
	naam: 'markt',
	huizen: {
			'2':[[152559.39,221834.44],[152542.46,221824.63],[152542.56,221824.47],[152552.95,221807.68],[152554.02,221808.34],[152555.7,221805.58],[152563.72,221810.41],[152559.28,221818.43],[152557.37,221821.88],[152561.13,221824.12],[152563.08,221820.86],[152566.34,221815.42],[152569.92,221817.72],[152571,221818.41]],
			'6':[[152573.63,221839.05],[152569.84,221845.62],[152561.76,221841],[152567.49,221830.93],[152569.07,221828.16],[152571.72,221823.49],[152572.02,221823.66],[152573.37,221821.33],[152575.02,221822.28],[152575.98,221820.59],[152582.21,221824.32]],
			'8':[[152585.47,221852.83],[152582.63,221856.94],[152577.31,221853.07],[152582.34,221844.25],[152583.23,221842.71],[152591.29,221828.73],[152600.9,221834.17],[152600.52,221834.85],[152599.04,221837.59],[152596.84,221836.27],[152591.82,221845.06],[152591.27,221846.02],[152590.44,221845.66]],
			'10':[[152582.88,221856.97],[152595.31,221865.34],[152600.66,221857.53],[152587.67,221849.91]],
			'12':[[152616.56,221862.98],[152608.98,221874.59],[152604.79,221871.76],[152600.47,221868.83],[152604.97,221861.95],[152605.44,221861.23],[152609.02,221863.6],[152610.52,221864.59],[152613.79,221859.43],[152608.57,221856.44],[152610.57,221853.37],[152619.26,221858.85]],
			'14':[[152622.33,221863.75],[152613.35,221877.49],[152608.98,221874.59],[152616.56,221862.98],[152618.38,221864.04],[152619.76,221862.03],[152621.58,221863.25],[152623.88,221859.68],[152624.64,221860.21]],
			'15':[[152541.16,221875.79],[152540.18,221878.6],[152540.16,221878.66],[152537.55,221877.81],[152540.12,221869.46],[152539.04,221869.21],[152539.54,221867.22],[152538.99,221867.11],[152541.62,221857.35],[152541.76,221857.38],[152542.22,221855.65],[152543.2,221855.11],[152544.99,221855.58],[152545.51,221856.54],[152545.35,221857.14],[152545.54,221857.19],[152546.44,221857.45],[152546.11,221858.57],[152546.28,221858.62]],
			'16':[[152623.58,221873.73],[152618.69,221881.06],[152613.35,221877.49],[152622.33,221863.75],[152625.25,221865.7],[152621.01,221871.72],[152623.76,221873.45]],
			'17':[[152543.45,221876.52],[152541.16,221875.79],[152546.28,221858.62],[152551.17,221859.99],[152547.1,221871.29],[152545.29,221870.81]],
			'18':[[152633.76,221875.17],[152626.53,221886.26],[152626.43,221886.18],[152618.69,221881.06],[152623.58,221873.73],[152624.82,221874.54],[152628.53,221869.06],[152630.96,221870.64],[152629.62,221872.5]],
			'19':[[152555.22,221874.32],[152551.07,221873.25],[152550.66,221874.45],[152548.54,221874.01],[152548.82,221872.65],[152546.8,221872.1],[152547.1,221871.29],[152551.17,221859.99],[152560.24,221862.28],[152555.5,221873.69]],
			'20':[[152636.34,221883.71],[152631.39,221892.52],[152626.46,221889.66],[152627.37,221888.14],[152634.9,221875.59],[152639.5,221878.1],[152638.39,221880.07]],
			'22':[[152631.39,221892.52],[152636.34,221883.71],[152641.61,221886.64],[152638.5,221891.57],[152636.29,221895.35]],
			'23':[[152559.14,221876.94],[152558.11,221879.49],[152555.99,221878.45],[152557.78,221874.74],[152555.5,221873.69],[152560.24,221862.28],[152564.18,221864.56]],
			'24':[[152658.03,221885.53],[152666.69,221890.5],[152665.66,221892.33],[152667.37,221893.32],[152663.08,221905.58],[152638.98,221891.84],[152638.58,221891.61],[152638.5,221891.57],[152641.61,221886.64],[152645.33,221880.55],[152647.25,221881.67],[152648.21,221879.9]],
			'25':[[152559.14,221876.94],[152564.18,221864.56],[152568.06,221866.91],[152564.79,221874.22],[152563.45,221878.83]],
			'26':[[152658.03,221885.53],[152666.69,221890.5],[152665.66,221892.33],[152667.37,221893.32],[152663.08,221905.58],[152638.98,221891.84],[152638.58,221891.61],[152638.5,221891.57],[152641.61,221886.64],[152645.33,221880.55],[152647.25,221881.67],[152648.21,221879.9]],
			'27':[[152560.53,221888.78],[152563.45,221878.83],[152564.79,221874.22],[152568.06,221866.91],[152573.76,221870.31],[152580.18,221874.15],[152572.99,221886.13],[152568.66,221883.49],[152568.07,221883.72],[152566.84,221882.95],[152566.03,221884.31],[152565.25,221883.84],[152562.08,221889.57]],
			'28':[[152658.03,221885.53],[152666.69,221890.5],[152665.66,221892.33],[152667.37,221893.32],[152663.08,221905.58],[152638.98,221891.84],[152638.58,221891.61],[152638.5,221891.57],[152641.61,221886.64],[152645.33,221880.55],[152647.25,221881.67],[152648.21,221879.9]],
			'29':[[152576.49,221899.6],[152576.03,221899.75],[152574.92,221899.65],[152573.9,221899.27],[152573,221898.78],[152572.61,221898.57],[152572.23,221898.23],[152571.79,221897.73],[152571.23,221896.99],[152571.24,221896.98],[152579.76,221882.89],[152578.83,221882.33],[152581.61,221877.65],[152582.54,221878.2],[152583.84,221876.35],[152589.49,221879.75],[152583.29,221890.04],[152581.23,221888.75],[152580.14,221890.37],[152582.35,221891.58],[152577.83,221899.08],[152577.53,221899.58],[152576.83,221899.25]],
			'30':[[152658.03,221885.53],[152666.69,221890.5],[152665.66,221892.33],[152667.37,221893.32],[152663.08,221905.58],[152638.98,221891.84],[152638.58,221891.61],[152638.5,221891.57],[152641.61,221886.64],[152645.33,221880.55],[152647.25,221881.67],[152648.21,221879.9]],
			'31':[[152578.92,221913.1],[152577.97,221913.94],[152577.56,221913.68],[152574.48,221911.72],[152581.16,221901.05],[152577.83,221899.08],[152582.35,221891.58],[152583.29,221890.04],[152589.49,221879.75],[152596.62,221884.11],[152584.52,221903.93],[152580.67,221910.22],[152580.55,221910.42]],
			'33':[[152584.52,221903.93],[152596.62,221884.11],[152603.56,221888.4],[152598.19,221896.53],[152596.74,221896.83],[152595.65,221898.45],[152595.95,221899.88],[152590.65,221907.88]],
			'39':[[152611.81,221922.34],[152614.85,221923.82],[152612.4,221928],[152611.69,221929.2],[152604.53,221925.28],[152604.63,221925.11],[152605.48,221923.66],[152610.84,221914.65],[152607.5,221912.67],[152609.92,221908.61],[152610.01,221908.45],[152615.04,221900.14],[152618.54,221902.3],[152620.81,221898.59],[152627.33,221902.52],[152620.12,221914.82],[152618.68,221917.9],[152618.41,221917.73],[152616.7,221916.66],[152618.36,221914.06],[152617.24,221913.38]],
			'41':[[152628.37,221924.55],[152628.27,221924.74],[152622.47,221935.01],[152618.83,221932.91],[152624.96,221921.92],[152625.39,221922.15],[152627.32,221918.66],[152620.12,221914.82],[152627.33,221902.52],[152637.54,221908.33],[152637.53,221908.35]],
			'43':[[152635.27,221925.54],[152631.93,221923.73],[152630.71,221925.88],[152628.37,221924.55],[152637.53,221908.35],[152637.54,221908.33],[152638.74,221909.03],[152643.02,221911.51],[152635.48,221925.16]],
			'47':[[152656.5,221918.41],[152663.47,221921.85],[152648.86,221946.66],[152648.86,221946.67],[152653.61,221949.72],[152653.87,221949.88],[152651.63,221952.86],[152646.95,221949.95],[152641.64,221946.65],[152633.52,221941.61],[152648.4,221914.4]],
			'55':[[152666.51,221945.98],[152676.37,221929.53],[152680.22,221931.93],[152669.79,221947.91]]
		}
}
module.exports = {
	addHuizen() {
		addStraat(straat.naam, straat.huizen)
	}
}