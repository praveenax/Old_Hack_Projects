
function love.load()

    local static = require("models.static")
    local player = require("models.player")
    lg = love.graphics

    y=static.ZONE

end

function love.update(dt)
--dt = delta-time
    player.cooldown = player.cooldown - 1

    if love.keyboard.isDown("right") then
      player.OnRight()
    elseif love.keyboard.isDown("left") then
      player.OnLeft()
    end

    if love.keyboard.isDown(" ") then
        player.fire()
    end

    for i,bullet in ipairs(player.bullets) do
        if bullet.y < static.BULLET_LIMIT then
            table.remove(player.bullets,i)
        end
        bullet.y = bullet.y - static.BULLET_SPEED
    end


end

function love.draw()

    -- background = lg.newImage("assets/back.jpg")
    -- lg.draw(background,0,0,0,1,1,0,0)

    lg.setBackgroundColor( 0, 105, 255 )

    player.draw()
    stars_count = 100
    i=0

    for _,v in pairs(player.bullets) do
        lg.setColor(255,255,255)
        lg.circle("fill",v.x,v.y,10,10)
    end

end

function getRandomVal(min,max)
    return math.random( min, max )
end
