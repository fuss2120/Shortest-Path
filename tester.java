import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class tester {

	public static void main(String[] args) {
		// define .csv file
		String fileName = "/Users/Joey/Documents/workspace/Shortest_Path/city_coordinates_revised.csv";
		File file = new File(fileName);

		ArrayList<String> cities = new ArrayList<String>();
		ArrayList<Float> latitudes = new ArrayList<Float>();
		ArrayList<Float> longitudes = new ArrayList<Float>();

		String line = "";
		BufferedReader inputStream = null;

		try {
			// read from file using Scanner
			inputStream = new BufferedReader(new FileReader(file));
			// hash each line and put into corresponding ArrayList
			while ((line = inputStream.readLine()) != null) {
				// split the line by comma
				String[] parts = line.split(",");

				// retrieving specific parts from parts array
				String city = parts[0];
				String latitude = parts[1];
				String longitude = parts[2];

				// put specific parts into corresponding ArrayList
				cities.add(city);
				latitudes.add(Float.parseFloat(latitude));
				longitudes.add(Float.parseFloat(longitude));
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (inputStream != null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}


		//
		// printing to correct file format
		//

		System.out.println("var data = { \n\t\"type\": \"FeatureCollection\",");
		System.out.println("\t\"features\": [{");

		for (int i = 0; i < cities.size(); i++){
			System.out.println("\t\t\"type\": \"Feature\",");
			System.out.println("\t\t\"geometry\": {");
			System.out.println("\t\t\t\"type\": \"Point\",");
			System.out.println("\t\t\t\"coordinates\": ["+longitudes.get(i)+",");
			System.out.println("\t\t\t    "+latitudes.get(i));
			System.out.println("\t\t\t]");
			System.out.println("\t\t},");
			System.out.println("\t\t\"properties\": {}");
			if ((i+1) != cities.size()){
				System.out.println("\t    },");
				System.out.println("\t    {");
			}
			else {
				System.out.println("\t    }");
				System.out.println("\t]");
				System.out.println("    }");
			}
		}

	}
}
