using UmbracoGridConfigLoader.Models;
using UmbracoGridConfigLoader.Attributes;

namespace Graph.Components.MapBlock
{
	public class MapBlock : IGridConfigLoader
	{
		[GridLayoutProperty(Label = "Map Block")]
		public IGridLayout Layout { get; set; }
	}
}
