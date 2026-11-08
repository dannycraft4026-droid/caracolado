// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003020202020202020300000b0c0d00000100000000000000080000000000000001000000000000000800000000000000010009070600000008000e0000000e000100080001000000080000000000000001000800010000000800000e0000000e0100080001000000080000000000000001000800010000000800000000000000010008000100000008000e00000e00000100080001000000080000000000000e01000800010000000800000000000000010008000100000008000e00000000000100080001000000080000000000000e0100080001000000040202020200000001000800010000000000000000000000050a0400050000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . 2 2 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 . . . . . . . 
2 . 2 . 2 . . . 2 2 2 2 2 . . . 
2 . 2 . 2 . . . . . . . . . . . 
2 . 2 . 2 . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles11,sprites.builtin.forestTiles14,sprites.builtin.forestTiles10,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles5,sprites.builtin.forestTiles2,sprites.builtin.forestTiles17,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.castle.rock2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
