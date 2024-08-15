AddEventHandler('onResourceStarting', function(resourceName)
  if resourceName == GetCurrentResourceName() then
    print('Lua/Vanilla server-side boilerplate started!')
  end
end)
