AddEventHandler('onResourceStarting', function(resourceName)
  if resourceName == GetCurrentResourceName() then
    print('Lua/Nui/React server-side boilerplate started!')
  end
end)
