AddEventHandler('onResourceStarting', function(resourceName)
  if resourceName == GetCurrentResourceName() then
    print('Lua/Vanilla client-side boilerplate started!')
  end
end)
