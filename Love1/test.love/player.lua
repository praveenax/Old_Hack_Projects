player = {}
    local static = require("static")
    player.x =0 
    player.bullets = {}
    player.cooldown = 20
    player.fire  = function()
        if player.cooldown <=0 then
            player.cooldown =  20
            bullet = {}
            bullet.x = player.x + 50
            bullet.y = static.ZONE
            table.insert(player.bullets,bullet)
        end
    end

return player