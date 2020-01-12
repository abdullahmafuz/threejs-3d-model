

const container =document.querySelector('.scene');


let camera;
let scene;
let renderer;

function three(){

             scene = new THREE.Scene();
             camera = new THREE.PerspectiveCamera( 35, window.innerWidth/window.innerHeight, 0.1, 1000 );
            
            camera.position.set(10,60,500);

            var light = new THREE.AmbientLight( 0x404040,10 ); 
            scene.add( light );
            var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
            scene.add( directionalLight );
			 renderer = new THREE.WebGLRenderer({antialias:true ,alpha:true});
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.setPixelRatio(window.devicePixelRatio);
			document.body.appendChild( renderer.domElement );

            var loader = new THREE.GLTFLoader();

            let char;
            
            loader.load('model/scene.gltf',function ( gltf ) {
            
                    scene.add( gltf.scene );
                    char=gltf.scene.children[0]
                    renderer.render( scene, camera );
                })

               

			var animate = function () {
				requestAnimationFrame( animate );

                char.rotation.z += 0.005;
				
				

				renderer.render( scene, camera );
			};

			animate();
}

three();





window.addEventListener("resize",()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
});