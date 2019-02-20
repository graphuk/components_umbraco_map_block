using Gibe.LinkPicker.Umbraco.Models;

namespace Graph.Components.MapBlock
{
	public class GridControlMapBlockItem
	{
		public string Title { get; set; }
		public string Address { get; set; }
		public LinkPicker Link { get; set; }
		public string Latitude { get; set; }
		public string Longitude { get; set; }
		public bool IncludeCoordinatesInUrl { get; set; }
	}
}
