using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Skybrud.Umbraco.GridData;
using Skybrud.Umbraco.GridData.Values;

namespace Graph.Components.MapBlock
{
	public class GridControlMapBlockValue : GridControlValueBase
	{
		public GridControlMapBlockItem GridControlMapBlockItem { get; protected set; }

		public GridControlMapBlockValue(GridControl control, JToken obj) : base(control, obj as JObject)
		{
			GridControlMapBlockItem = JsonConvert.DeserializeObject<GridControlMapBlockItem>(obj.ToString());
		}

		public static GridControlMapBlockValue Parse(GridControl control, JToken obj)
		{
			if (obj != null)
				return new GridControlMapBlockValue(control, obj);
			return (GridControlMapBlockValue)null;
		}
	}
}
