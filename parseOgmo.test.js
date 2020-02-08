const parseOgmo = require("./parseOgmo");

test("parseOgmo", async () => {
  expect(await parseOgmo("fixtures/game.ogmo")).toMatchInlineSnapshot(`
    "module.exports = {
      \\"name\\": \\"game\\",
      \\"ogmoVersion\\": \\"3.3.0\\",
      \\"levelPaths\\": [\\".\\"],
      \\"backgroundColor\\": \\"#282c34ff\\",
      \\"gridColor\\": \\"#3c4049cc\\",
      \\"anglesRadians\\": true,
      \\"directoryDepth\\": 5,
      \\"layerGridDefaultSize\\": {
        \\"x\\": 16,
        \\"y\\": 16
      },
      \\"levelDefaultSize\\": {
        \\"x\\": 320,
        \\"y\\": 240
      },
      \\"levelMinSize\\": {
        \\"x\\": 128,
        \\"y\\": 128
      },
      \\"levelMaxSize\\": {
        \\"x\\": 4096,
        \\"y\\": 4096
      },
      \\"levelValues\\": [{
        \\"name\\": \\"name\\",
        \\"definition\\": \\"String\\",
        \\"defaults\\": \\"Unnamed Level\\",
        \\"maxLength\\": 0,
        \\"trimWhitespace\\": true
      }, {
        \\"name\\": \\"some_color\\",
        \\"definition\\": \\"Color\\",
        \\"defaults\\": \\"#ff7474ff\\",
        \\"includeAlpha\\": false
      }, {
        \\"name\\": \\"some_enum\\",
        \\"definition\\": \\"Enum\\",
        \\"choices\\": [\\"ONE\\", \\"TWO\\", \\"THREE\\"],
        \\"defaults\\": 0
      }, {
        \\"name\\": \\"some_float\\",
        \\"definition\\": \\"Float\\",
        \\"defaults\\": 0.3,
        \\"bounded\\": false,
        \\"min\\": 0,
        \\"max\\": 100
      }, {
        \\"name\\": \\"some_int\\",
        \\"definition\\": \\"Integer\\",
        \\"defaults\\": 3,
        \\"bounded\\": false,
        \\"min\\": 0,
        \\"max\\": 100
      }, {
        \\"name\\": \\"some_text\\",
        \\"definition\\": \\"Text\\",
        \\"defaults\\": \\"\\"
      }],
      \\"defaultExportMode\\": \\".json\\",
      \\"compactExport\\": false,
      \\"externalScript\\": \\"\\",
      \\"playCommand\\": \\"\\",
      \\"entityTags\\": [],
      \\"layers\\": [{
        \\"definition\\": \\"tile\\",
        \\"name\\": \\"tiles\\",
        \\"gridSize\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"exportID\\": \\"17907160\\",
        \\"exportMode\\": 0,
        \\"arrayMode\\": 0,
        \\"defaultTileset\\": \\"pokemon tiles\\"
      }, {
        \\"definition\\": \\"grid\\",
        \\"name\\": \\"collision\\",
        \\"gridSize\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"exportID\\": \\"17919195\\",
        \\"arrayMode\\": 0,
        \\"legend\\": {
          \\"0\\": \\"#00000000\\",
          \\"1\\": \\"#000000ff\\"
        }
      }, {
        \\"definition\\": \\"entity\\",
        \\"name\\": \\"entities\\",
        \\"gridSize\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"exportID\\": \\"17911144\\",
        \\"requiredTags\\": [],
        \\"excludedTags\\": []
      }, {
        \\"definition\\": \\"decal\\",
        \\"name\\": \\"decals\\",
        \\"gridSize\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"exportID\\": \\"17910275\\",
        \\"folder\\": \\"decals\\",
        \\"includeImageSequence\\": false,
        \\"scaleable\\": true,
        \\"rotatable\\": true,
        \\"values\\": [{
          \\"name\\": \\"some_float\\",
          \\"definition\\": \\"Float\\",
          \\"defaults\\": 0.1234,
          \\"bounded\\": true,
          \\"min\\": 0,
          \\"max\\": 100
        }]
      }],
      \\"entities\\": [{
        \\"exportID\\": \\"17916759\\",
        \\"name\\": \\"new entity\\",
        \\"limit\\": -1,
        \\"size\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"origin\\": {
          \\"x\\": 0,
          \\"y\\": 0
        },
        \\"originAnchored\\": true,
        \\"shape\\": {
          \\"label\\": \\"Rectangle\\",
          \\"points\\": [{
            \\"x\\": -1,
            \\"y\\": -1
          }, {
            \\"x\\": 1,
            \\"y\\": -1
          }, {
            \\"x\\": -1,
            \\"y\\": 1
          }, {
            \\"x\\": 1,
            \\"y\\": -1
          }, {
            \\"x\\": -1,
            \\"y\\": 1
          }, {
            \\"x\\": 1,
            \\"y\\": 1
          }]
        },
        \\"color\\": \\"#ff0000ff\\",
        \\"tileX\\": false,
        \\"tileY\\": false,
        \\"tileSize\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"resizeableX\\": false,
        \\"resizeableY\\": false,
        \\"rotatable\\": false,
        \\"rotationDegrees\\": 360,
        \\"canFlipX\\": false,
        \\"canFlipY\\": false,
        \\"canSetColor\\": false,
        \\"hasNodes\\": false,
        \\"nodeLimit\\": 0,
        \\"nodeDisplay\\": 0,
        \\"nodeGhost\\": true,
        \\"tags\\": [],
        \\"values\\": []
      }, {
        \\"exportID\\": \\"17913416\\",
        \\"name\\": \\"player!!\\",
        \\"limit\\": 1,
        \\"size\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"origin\\": {
          \\"x\\": 0,
          \\"y\\": 0
        },
        \\"originAnchored\\": true,
        \\"shape\\": {
          \\"label\\": \\"Rectangle\\",
          \\"points\\": [{
            \\"x\\": -1,
            \\"y\\": -1
          }, {
            \\"x\\": 1,
            \\"y\\": -1
          }, {
            \\"x\\": -1,
            \\"y\\": 1
          }, {
            \\"x\\": 1,
            \\"y\\": -1
          }, {
            \\"x\\": -1,
            \\"y\\": 1
          }, {
            \\"x\\": 1,
            \\"y\\": 1
          }]
        },
        \\"color\\": \\"#0084ffff\\",
        \\"tileX\\": false,
        \\"tileY\\": false,
        \\"tileSize\\": {
          \\"x\\": 16,
          \\"y\\": 16
        },
        \\"resizeableX\\": false,
        \\"resizeableY\\": false,
        \\"rotatable\\": false,
        \\"rotationDegrees\\": 360,
        \\"canFlipX\\": false,
        \\"canFlipY\\": false,
        \\"canSetColor\\": false,
        \\"hasNodes\\": false,
        \\"nodeLimit\\": 0,
        \\"nodeDisplay\\": 0,
        \\"nodeGhost\\": true,
        \\"tags\\": [],
        \\"values\\": [{
          \\"name\\": \\"some_boolean\\",
          \\"definition\\": \\"Boolean\\",
          \\"defaults\\": false
        }],
        \\"texture\\": typeof require(\\"./player-overworld-preview.png\\") === \\"object\\" && require(\\"./player-overworld-preview.png\\") != null && require(\\"./player-overworld-preview.png\\").__esModule && {}.hasOwnProperty.call(require(\\"./player-overworld-preview.png\\"), \\"default\\") ? require(\\"./player-overworld-preview.png\\").default : require(\\"./player-overworld-preview.png\\")
      }],
      \\"tilesets\\": [{
        \\"label\\": \\"pokemon tiles\\",
        \\"path\\": typeof require(\\"./pokemon-tiles.png\\") === \\"object\\" && require(\\"./pokemon-tiles.png\\") != null && require(\\"./pokemon-tiles.png\\").__esModule && {}.hasOwnProperty.call(require(\\"./pokemon-tiles.png\\"), \\"default\\") ? require(\\"./pokemon-tiles.png\\").default : require(\\"./pokemon-tiles.png\\"),
        \\"tileWidth\\": 16,
        \\"tileHeight\\": 16,
        \\"tileSeparationX\\": 0,
        \\"tileSeparationY\\": 0
      }]
    };"
  `);
});
