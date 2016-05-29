player = {}
    local static = require("models.static")
    player.x =200
    player.y=static.ZONE
    player.bullets = {}
    player.cooldown = 20
--    player.image = love.graphics.newImage("assets/ship.png")
    player.fire  = function()
        if player.cooldown <=0 then
            player.cooldown =  20
            bullet = {}
            bullet.x = player.x + 50
            bullet.y = static.ZONE
            table.insert(player.bullets,bullet)
        end
    end

    player.draw = function()
      --  lg.setColor(0,0,255)
        lg.rectangle("fill",player.x,y,100,20)
--      love.graphics.draw( drawable, x, y, r, sx, sy, ox, oy, kx, ky )
--        love.graphics.draw(player.image,player.x,player.y,0,0.1,0.1,0,0)

    end

    player.OnRight = function()
      player.x =player.x+static.PLAYER_SPEED
    end

    player.OnLeft = function()
      player.x =player.x-static.PLAYER_SPEED
    end


return player
