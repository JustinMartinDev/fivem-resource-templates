AddEventHandler('onResourceStarting', function(resourceName)
  if resourceName == GetCurrentResourceName() then
    print('Lua/Nui/Vue server-side boilerplate started!')
  end
end)
