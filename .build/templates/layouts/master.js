(function(dust){dust.register("layouts\/master",body_0);function body_0(chk,ctx){return chk.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\" /><title>").b(ctx.getBlock("title"),ctx,{},{}).w("</title><link rel=\"stylesheet\" href=\"/css/app.css\"></head><body><header class=\"grey\"><div class=\"wrapper\"><h1>Kraken Central</h1><nav><ul class=\"nm-np inline\"><li><a href=\"/\">Home</a></li><li><a href=\"/profile\">Profile</a></li><li><a href=\"/admin\">Admin</a></li><li>").s(ctx.get(["user"], false),ctx,{"else":body_1,"block":body_2},{}).w("</li></ul></nav></div></header><div id=\"wrapper\">").b(ctx.getBlock("body"),ctx,{},{}).w("</div><script src=\"/js/app.js\"></script></body></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<a href=\"/login\">Login</a>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<a href=\"/logout\">Logout</a>");}body_2.__dustBody=!0;return body_0}(dust));