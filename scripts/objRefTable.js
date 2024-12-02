const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Fade,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor
	];
};
self.C3_JsPropNameTable = [
	{Fade: 0},
	{capaDoDiario: 0},
	{Mouse: 0},
	{Sprite: 0},
	{text: 0}
];

self.InstanceType = {
	capaDoDiario: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	text: class extends self.ITextInstance {}
}