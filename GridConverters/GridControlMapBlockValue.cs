using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Skybrud.Umbraco.GridData;
using Skybrud.Umbraco.GridData.Values;

namespace Graph.Components.MapBlock
{
	public class GridControlMapBlockValue : GridControlValueBase
	{
		public GridControlMabBlockItem GridControlMabBlockItem { get; protected set; }

		public GridControlMapBlockValue(GridControl control, JToken obj) : base(control, obj as JObject)
		{
			GridControlMabBlockItem = JsonConvert.DeserializeObject<GridControlMabBlockItem>(obj.ToString());
		}

		public static GridControlMapBlockValue Parse(GridControl control, JToken obj)
		{
			if (obj != null)
				return new GridControlMapBlockValue(control, obj);
			return (GridControlMapBlockValue)null;
		}
	}
}
