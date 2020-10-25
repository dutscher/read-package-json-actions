# Read package version actions

Read your version in `package.json`

## Example workflow

`package.json`
```json

{
  "name": "your-package",
  "endpoint": {
    "url": "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?",
    "params": "outFields=*&returnGeometry=false&f=json&outSR=4326&where=",
    "locations": [
      "Treptow-Köpenick",
      "Mitte",
      "Friedrichshain-Kreuzberg",
      "Pankow",
      "Lichtenberg",
      "Marzahn-Hellersdorf",
      "Charlottenburg-Wilmersdorf",
      "Steglitz-Zehlendorf",
      "Tempelhof-Schöneberg",
      "Neukölln",
      "Reinickendorf",
      "Spandau"
    ]
  }
}
```

`.github/workflow/test.yml`
```yml
name: Get version from package.json

on: push

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read package.json
        uses: dutscher/read-package-json-endpoint-actions@v1
        id: package-json-endpoint

      - name: Show version number
        run: echo "Version is ${{ steps.package-json-endpoint.outputs.endpoint }}"
        # Version is 1.0.0
```


# License

MIT