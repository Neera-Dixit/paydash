(function(dust){dust.register("dashboard",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<div class=\"container\"><div class=\"modify-time-period-controls\"><button class=\"selected\" data-timeperiod>All</button><button data-timeperiod=\"61\">Past 60 days</button><button data-timeperiod=\"31\">Past 30 days</button></div><div class=\"pure-g\"><div class=\"pure-u-24-24\"><div class=\"chart-holder\"><div id=\"block_performance\"></div><div class=\"legend\"></div><div class=\"total_trans\">Total transaction : <span id=\"total_trans\"></span></div></div></div></div><h2>Stepwise performance of your block</h2><div class=\"selectors pure-g\"><div class=\"pure-u-3-24\"><label for=\"option-one\" class=\"pure-checkbox\">Block Mean<input class=\"blockSelector\" id=\"option-one\" type=\"checkbox\" value=\"block\" checked></label></div><div class=\"pure-u-3-24\"><label for=\"option-two\" class=\"pure-checkbox\">Disctrict Mean<input class=\"blockSelector\" id=\"option-two\" type=\"checkbox\" value=\"district\" ></label></div><div class=\"pure-u-3-24\"><label for=\"option-three\" class=\"pure-checkbox\">State Mean<input class=\"blockSelector\" id=\"option-three\" type=\"checkbox\" value=\"state\"></label></div><!--  <div class=\"pure-u-3-24\"><label for=\"option-four\" class=\"pure-checkbox\">Mandated Maximum<input class=\"blockSelector\" id=\"option-four\" type=\"checkbox\" value=\"mandated\" checked></label></div> --></div><div class=\"pure-g block_charts\"><div class=\"pure-u-6-24\"><div class=\"chart-holder small_chart\"><div id=\"s_1\"></div><div class=\"s_1_legend\"></div></div></div><div class=\"pure-u-6-24\"><div class=\"chart-holder small_chart\"><div id=\"s_2\"></div><div class=\"s_2_legend\"></div></div></div><div class=\"pure-u-6-24\"><div class=\"chart-holder small_chart\"><div id=\"s_3\"></div><div class=\"s_3_legend\"></div></div></div><div class=\"pure-u-6-24\"><div class=\"chart-holder small_chart\"><div id=\"s_4\"></div><div class=\"s_4_legend\"></div></div></div><div class=\"pure-u-6-24\"><div class=\"chart-holder small_chart\"><div id=\"s_5\"></div><div class=\"s_5_legend\"></div></div></div><div class=\"pure-u-6-24\"><div class=\"chart-holder small_chart\"><div id=\"s_6\"></div><div class=\"s_6_legend\"></div></div></div><div class=\"pure-u-6-24\"><div class=\"chart-holder small_chart\"><div id=\"s_7\"></div><div class=\"s_7_legend\"></div></div></div><div class=\"pure-u-6-24\"></div></div><!-- reapeat --><h2>Performance of your Panchayats</h2><div class=\"panchayat_selectors\"><select id=\"panchayat_step_controls\"><option value=\"\">All</option><option value=\"1\">Muster roll closure to muster roll entry</option><option value=\"2\">Muster roll entry to wage list generation</option><option value=\"3\">Wage list generation to wage list sign</option><option value=\"4\">Wage list sign to FTO generation</option><option value=\"5\">FTO generation to first signature</option><option value=\"6\">First signature to second signature</option><option value=\"7\">Second signature to processed by bank</option></select></div><div class=\"pure-g panchayat_charts-container\"></div></div><div class=\"footer\"><div class=\"container\">Copyright 2015</div></div>");}body_1.__dustBody=!0;return body_0}(dust));