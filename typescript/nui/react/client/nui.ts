/** Utils Nui functions **/
type NUICallbackFunction<ReqBody> = (data: ReqBody, res: Function) => void;

export const RegisterNUICallback = <T = any>(
  name: string,
  cb: NUICallbackFunction<T>
) => {
  RegisterNuiCallbackType(name);
  on(`__cfx_nui:${name}`, cb);
};

const toggleNuiFrame = (shouldShow: boolean) => {
  SetNuiFocus(shouldShow, shouldShow);
  //sendReactMessage('setVisible', shouldShow);
};

RegisterNUICallback("hideFrame", (_, cb) => {
  toggleNuiFrame(false);
  console.log("Hide NUI frame");
  cb({});
});

RegisterCommand(
  "show-nui",
  () => {
    toggleNuiFrame(true);
    console.log("Show NUI frame");
  },
  false
);

// Exemple of sending data to React

RegisterNUICallback<string>("getClientData", (data, cb) => {
  console.log("Data sent by React", JSON.parse(data));

  const curCoords = GetEntityCoords(PlayerPedId(), true);

  const retData = { x: curCoords[0], y: curCoords[1], z: curCoords[2] };
  cb(retData);
});
