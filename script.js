import * as THREE from 'three'


const scene = new THREE.Scene() //criando uma cena
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight) //criando a camera, passando fov, e o tamanho que tera a tela
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas}) //criando o renderizador, que é tipo uma parte do html
renderer.setSize(innerWidth, innerHeight) //definindo o tamanho que terá

const geometry = new THREE.BoxGeometry(1, 1, 1) //criando um objeto 3d
const mesh = new THREE.MeshBasicMaterial({color: 0x00ff00 }) //adicionando a cor, material
const cube = new THREE.Mesh(geometry, mesh) //mesclando os dois

scene.add(cube) //colocando o objeto 3d na scena
camera.position.z = 5 //mudando a posição da camera
camera.position.y = 2
camera.position.x = 1

renderer.render(scene, camera)

console.log(camera)

