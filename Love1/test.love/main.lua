

--function love.draw()
--    love.graphics.print("Hello World", 400, 300)
--end



function love.load()
--   love.graphics.setColor(0,0,0)
    local static = require("static")
    local player = require("player")
    
--
--    
--    x=0
    y=static.ZONE
end

function love.update(dt)
--dt = delta-time
    player.cooldown = player.cooldown - 1
    
    if love.keyboard.isDown("right") then
        player.x =player.x+1
    elseif love.keyboard.isDown("left") then
        player.x =player.x-1
    end
    
    if love.keyboard.isDown(" ") then
        player.fire()
    end
    
    for i,b in ipairs(player.bullets) do
        if b.y < static.BULLET_LIMIT then
            table.remove(player.bullets,i)
        end
        b.y = b.y - static.BULLET_SPEED
    end
    
--    if love.keyboard.isDown("up") then
--        y =y-1
--    elseif love.keyboard.isDown("down") then
--        y =y+1
--    end
end
 
function love.draw()
--   love.graphics.print("This text is not black because of the line below", 100, 100)
   love.graphics.setColor(0,0,255)
--   love.graphics.print("This text is red", 100, 200)
    love.graphics.rectangle("fill",player.x,y,100,20)
    
    love.graphics.setColor(255,255,255)
    for _,v in pairs(player.bullets) do
        
        love.graphics.rectangle("fill",v.x,v.y,10,10)
    end
--    love.graphics.setColor(0,255,255)
----   love.graphics.print("This text is red", 100, 200)
--    love.graphics.rectangle("fill",x,y,5,5)
--    x = x+1
end

