using UmbracoGridConfigLoader.Models;
using UmbracoGridConfigLoader.Attributes;

namespace Graph.Components.MapBlock
{
	public class MapBlock : IGridConfigLoader
	{
		[GridLayoutProperty(Label = "Map Block", AllowedEditors = new []{"mapBlock"}, MaxItems = 1)]
		public IGridLayout Layout { get; set; }
	}
}
