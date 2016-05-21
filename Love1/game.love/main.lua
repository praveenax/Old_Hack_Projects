

--function love.draw()
--    love.graphics.print("Hello World", 400, 300)
--end



function love.load()
--   love.graphics.setColor(0,0,0)
--    local conf = require("conf")
    local static = require("models.static")
    local player = require("models.player")
   lg = love.graphics 
--
--    
--    x=0
    y=static.ZONE
end

function love.update(dt)
--dt = delta-time
    player.cooldown = player.cooldown - 1
    
    if love.keyboard.isDown("right") then
            player.x =player.x+static.PLAYER_SPEED
    elseif love.keyboard.isDown("left") then
            player.x =player.x-static.PLAYER_SPEED
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
   player.draw()
   
--    draw random stars
    stars_count = 100
    i=0
--    while(i < stars_count )
--    do
--        local x_val = getRandomVal(0,600)
--        local y_val = getRandomVal(0,600)
--        lg.setColor(255,255,255)    
--        lg.circle("fill",x_val,y_val,getRandomVal(1,3),getRandomVal(1,3))
--    end
--    
    for _,v in pairs(player.bullets) do
        lg.setColor(255,255,255)    
        lg.circle("fill",v.x,v.y,10,10)
    end
--    love.graphics.setColor(0,255,255)
----   love.graphics.print("This text is red", 100, 200)
--    love.graphics.rectangle("fill",x,y,5,5)
--    x = x+1
end

function getRandomVal(min,max)
    return math.random( min, max )
end

--function love.conf(t)
--    t.modules.joystick = true   -- Enable the joystick module (boolean)
--    t.modules.audio = true      -- Enable the audio module (boolean)
--    t.modules.keyboard = true   -- Enable the keyboard module (boolean)
--    t.modules.event = true      -- Enable the event module (boolean)
--    t.modules.image = true      -- Enable the image module (boolean)
--    t.modules.graphics = true   -- Enable the graphics module (boolean)
--    t.modules.timer = true      -- Enable the timer module (boolean)
--    t.modules.mouse = true      -- Enable the mouse module (boolean)
--    t.modules.sound = true      -- Enable the sound module (boolean)
--	t.modules.thread = true
--    t.modules.physics = true    -- Enable the physics module (boolean)
--    t.console = true           -- Attach a console (boolean, Windows only)
--    t.title = "GAMER"        -- The title of the window the game is in (string) 
--    t.author = "PRAX"        -- The author of the game (string)
--    t.window.fullscreen = false -- Enable fullscreen (boolean)
--    t.window.vsync = false       -- Enable vertical sync (boolean)
--    t.window.fsaa = 0           -- The number of FSAA-buffers (number)
--    t.window.height = 600       -- The window height (number)
--    t.window.width = 800        -- The window width (number)
--end