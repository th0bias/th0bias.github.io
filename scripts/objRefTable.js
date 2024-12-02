const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.BinaryData,
		C3.Plugins.AJAX,
		C3.Plugins.Arr,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.SetLayerOpacity,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Behaviors.Fade.Cnds.OnFadeOutEnd,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Fade.Cnds.OnFadeInEnd,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData
	];
};
self.C3_JsPropNameTable = [
	{Fade: 0},
	{capaDoDiario: 0},
	{Mouse: 0},
	{in: 0},
	{out: 0},
	{Sprite: 0},
	{text: 0},
	{Audio: 0},
	{BinaryData: 0},
	{AJAX: 0},
	{Array: 0},
	{page: 0},
	{ontransition: 0}
];

self.InstanceType = {
	capaDoDiario: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	text: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	BinaryData: class extends self.IBinaryDataInstance {},
	AJAX: class extends self.IInstance {},
	Array: class extends self.IArrayInstance {}
}