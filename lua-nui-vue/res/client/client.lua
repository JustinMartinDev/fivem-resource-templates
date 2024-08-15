local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendVueMessage('setVisible', shouldShow)
end

RegisterCommand('show-nui', function()
  toggleNuiFrame(true)
  debugPrint('Show NUI frame')
end)


RegisterCommand('hide-nui', function()
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame')
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame from frame itself')
  cb({})
end)

RegisterNUICallback('getClientData', function(data, cb)
  debugPrint('Data sent by Vue', json.encode(data))

  -- Lets send back client coords to the React frame for use
  local curCoords = GetEntityCoords(PlayerPedId())

  local retData <const> = { x = curCoords.x, y = curCoords.y, z = curCoords.z }
  cb(retData)
end)


AddEventHandler('onResourceStarting', function(resourceName)
  if resourceName == GetCurrentResourceName() then
    print('Lua/Nui/Vue client-side boilerplate started!')
  end
end)
