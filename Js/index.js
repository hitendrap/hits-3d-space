const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const createScene = function () {

    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(15, 3, 25), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    camera.speed = 0.4;
    camera.checkCollisions = true;

    // apply gravity to the camera
    camera.applyGravity = true;

    // add wasd controls to the camera 
    camera.keysUp.push(87); // W
    camera.keysDown.push(83); // S
    camera.keysLeft.push(65); // A
    camera.keysRight.push(68); // D

    const light = new BABYLON.HemisphericLight("light",
        new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 1;

    const light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, 1, -0.5), scene);
    light2.intensity = 0.5;




    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 150, height: 100 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial("groundMat", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("./textures/floor.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 20;
    groundMaterial.diffuseTexture.vScale = 20;
    ground.material = groundMaterial;
    ground.checkCollisions = true;

    var xr = scene.createDefaultXRExperienceAsync({
        floorMeshes: [ground]
    }).then(function (xr) {
        // Optional: Handle teleportation destination change event
        xr.teleportation.onDestinationChangedObservable.add(function (destination) {
            console.log("Teleport destination changed to:", destination);
        });
    });

    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { width: 150, height: 150, depth: 100 }, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;
    skybox.checkCollisions = true;

    // image plane
    const imagePlane = BABYLON.MeshBuilder.CreatePlane("imagePlane", { width: 20, height: 10 }, scene);
    imagePlane.position.x = 0;
    imagePlane.position.y = 10;
    imagePlane.position.z = 49;
    const imagePlaneMaterial = new BABYLON.StandardMaterial("imagePlaneMat", scene);
    imagePlaneMaterial.diffuseTexture = new BABYLON.Texture("./textures/Blockchain.jpg", scene);
    imagePlane.material = imagePlaneMaterial;

    // image plane
    const imagePlane2 = BABYLON.MeshBuilder.CreatePlane("imagePlane2", { width: 20, height: 10 }, scene);
    imagePlane2.position.x = 25;
    imagePlane2.position.y = 10;
    imagePlane2.position.z = 49;
    const imagePlaneMaterial2 = new BABYLON.StandardMaterial("imagePlaneMat2", scene);
    imagePlaneMaterial2.diffuseTexture = new BABYLON.Texture("./textures/game.png", scene);
    imagePlane2.material = imagePlaneMaterial2;

    // image plane
    const imagePlane3 = BABYLON.MeshBuilder.CreatePlane("imagePlane3", { width: 20, height: 10 }, scene);
    imagePlane3.position.x = -25;
    imagePlane3.position.y = 10;
    imagePlane3.position.z = 49;
    const imagePlaneMaterial3 = new BABYLON.StandardMaterial("imagePlaneMat3", scene);
    imagePlaneMaterial3.diffuseTexture = new BABYLON.Texture("./textures/Metaverse.png", scene);
    imagePlane3.material = imagePlaneMaterial3;

    // image plane
    const imagePlane4 = BABYLON.MeshBuilder.CreatePlane("imagePlane4", { width: 20, height: 10 }, scene);
    imagePlane4.position.x = -50;
    imagePlane4.position.y = 10;
    imagePlane4.position.z = 49;
    const imagePlaneMaterial4 = new BABYLON.StandardMaterial("imagePlaneMat4", scene);
    imagePlaneMaterial4.diffuseTexture = new BABYLON.Texture("./textures/struct.png", scene);
    imagePlane4.material = imagePlaneMaterial4;

    // image plane
    const imagePlane5 = BABYLON.MeshBuilder.CreatePlane("imagePlane5", { width: 20, height: 10 }, scene);
    imagePlane5.position.x = 50;
    imagePlane5.position.y = 10;
    imagePlane5.position.z = 49;
    const imagePlaneMaterial5 = new BABYLON.StandardMaterial("imagePlaneMat5", scene);
    imagePlaneMaterial5.diffuseTexture = new BABYLON.Texture("./textures/oculus.png", scene);
    imagePlane5.material = imagePlaneMaterial5;

    // image plane
    const imagePlane6 = BABYLON.MeshBuilder.CreatePlane("imagePlane6", { width: 20, height: 10 }, scene);
    imagePlane6.position.x = 50;
    imagePlane6.position.y = 25;
    imagePlane6.position.z = 49;
    const imagePlaneMaterial6 = new BABYLON.StandardMaterial("imagePlaneMat6", scene);
    imagePlaneMaterial6.diffuseTexture = new BABYLON.Texture("./textures/circle.jpeg", scene);
    imagePlane6.material = imagePlaneMaterial6;

    // image plane
    const imagePlane7 = BABYLON.MeshBuilder.CreatePlane("imagePlane7", { width: 20, height: 10 }, scene);
    imagePlane7.position.x = -50;
    imagePlane7.position.y = 25;
    imagePlane7.position.z = 49;
    const imagePlaneMaterial7 = new BABYLON.StandardMaterial("imagePlaneMat7", scene);
    imagePlaneMaterial7.diffuseTexture = new BABYLON.Texture("./textures/cryptography.jpeg", scene);
    imagePlane7.material = imagePlaneMaterial7;

    // image plane
    const imagePlane8 = BABYLON.MeshBuilder.CreatePlane("imagePlane8", { width: 20, height: 10 }, scene);
    imagePlane8.position.x = 0;
    imagePlane8.position.y = 25;
    imagePlane8.position.z = 49;
    const imagePlaneMaterial8 = new BABYLON.StandardMaterial("imagePlaneMat8", scene);
    imagePlaneMaterial8.diffuseTexture = new BABYLON.Texture("./textures/internet.jpg", scene);
    imagePlane8.material = imagePlaneMaterial8;

    // image plane
    const imagePlane9 = BABYLON.MeshBuilder.CreatePlane("imagePlane9", { width: 20, height: 10 }, scene);
    imagePlane9.position.x = 25;
    imagePlane9.position.y = 25;
    imagePlane9.position.z = 49;
    const imagePlaneMaterial9 = new BABYLON.StandardMaterial("imagePlaneMat9", scene);
    imagePlaneMaterial9.diffuseTexture = new BABYLON.Texture("./textures/wifi.jpg", scene);
    imagePlane9.material = imagePlaneMaterial9;

    // image plane
    const imagePlane10 = BABYLON.MeshBuilder.CreatePlane("imagePlane10", { width: 20, height: 10 }, scene);
    imagePlane10.position.x = -25;
    imagePlane10.position.y = 25;
    imagePlane10.position.z = 49;
    const imagePlaneMaterial10 = new BABYLON.StandardMaterial("imagePlaneMat10", scene);
    imagePlaneMaterial10.diffuseTexture = new BABYLON.Texture("./textures/NFT.png", scene);
    imagePlane10.material = imagePlaneMaterial10;





    const ground2 = BABYLON.MeshBuilder.CreateGround("ground2", { width: 25, height: 28 }, scene);
    ground2.position.x = 19;
    ground2.position.y = 0.01;
    ground2.position.z = 7;
    const groundMaterial2 = new BABYLON.StandardMaterial("groundMat2", scene);
    groundMaterial2.diffuseTexture = new BABYLON.Texture("./textures/wood.jfif", scene);
    groundMaterial2.diffuseTexture.uScale = 5;
    groundMaterial2.diffuseTexture.vScale = 5;
    ground2.material = groundMaterial2;

    const ground3 = BABYLON.MeshBuilder.CreateGround("ground3", { width: 25, height: 28 }, scene);
    ground3.position.x = -11;
    ground3.position.y = 0.01;
    ground3.position.z = 7;
    const groundMaterial3 = new BABYLON.StandardMaterial("groundMat3", scene);
    groundMaterial3.diffuseTexture = new BABYLON.Texture("./textures/wood.jfif", scene);
    groundMaterial3.diffuseTexture.uScale = 5;
    groundMaterial3.diffuseTexture.vScale = 5;
    ground3.material = groundMaterial3;

    const ground4 = BABYLON.MeshBuilder.CreateGround("ground4", { width: 25, height: 28 }, scene);
    ground4.position.x = -41;
    ground4.position.y = 0.01;
    ground4.position.z = 7;
    const groundMaterial4 = new BABYLON.StandardMaterial("groundMat4", scene);
    groundMaterial4.diffuseTexture = new BABYLON.Texture("./textures/wood.jfif", scene);
    groundMaterial4.diffuseTexture.uScale = 5;
    groundMaterial4.diffuseTexture.vScale = 5;
    ground4.material = groundMaterial4;

    const road = BABYLON.MeshBuilder.CreateGround("road", { width: 9, height: 150 }, scene);
    road.position.y = 0.01;
    road.position.z = 30;
    road.rotation.y = Math.PI / 2;

    const roadMaterial = new BABYLON.StandardMaterial("roadMat", scene);
    roadMaterial.diffuseTexture = new BABYLON.Texture("./textures/road.jpg", scene);
    roadMaterial.diffuseTexture.vScale = 10;
    road.material = roadMaterial;


    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "school.glb").then((result) => {
        result.meshes[0].position.x = 20;
    });


    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "board1.glb").then((result1) => {
        result1.meshes[0].position.x = 25;
        result1.meshes[0].position.y = 2.5;
        result1.meshes[0].position.z = 15;
        result1.meshes[0].rotation.z = Math.PI / 2;
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "board2.glb").then((result2) => {
        result2.meshes[0].position.x = 10;
        result2.meshes[0].position.y = 2.5;
        result2.meshes[0].position.z = 15;
        result2.meshes[0].rotation.z = Math.PI / 2;
    });


    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "school.glb").then((result3) => {
        result3.meshes[0].position.x = -10;
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "board3.glb").then((result4) => {
        result4.meshes[0].position.x = -5;
        result4.meshes[0].position.y = 2.5;
        result4.meshes[0].position.z = 15;
        result4.meshes[0].rotation.z = Math.PI / 2;
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "board4.glb").then((result5) => {
        result5.meshes[0].position.x = -20;
        result5.meshes[0].position.y = 2.5;
        result5.meshes[0].position.z = 15;
        result5.meshes[0].rotation.z = Math.PI / 2;
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "school.glb").then((result6) => {
        result6.meshes[0].position.x = -40;
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "board5.glb").then((result7) => {
        result7.meshes[0].position.x = -35;
        result7.meshes[0].position.y = 2.5;
        result7.meshes[0].position.z = 15;
        result7.meshes[0].rotation.z = Math.PI / 2;
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "board6.glb").then((result8) => {
        result8.meshes[0].position.x = -50;
        result8.meshes[0].position.y = 2.5;
        result8.meshes[0].position.z = 15;
        result8.meshes[0].rotation.z = Math.PI / 2;
    });




    return scene;
};
const scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener("resize", function () {
    engine.resize();
});