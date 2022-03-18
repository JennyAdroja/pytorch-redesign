 import React from 'react'
 import './main.css';
 class Options extends React.Component{
    render(){
        return(
            <div className='mainMenu'>
                <div style={{backgroundColor:"#F3F4F7;"}}>
                    <h3>INSTALL PYTORCH</h3>
                    <h5>PyTorch Build</h5>
                    <input type="checkbox" name="Stabia"/>Stabia(1.11.0)
                    <input type="checkbox" name="Preview"/>Preview(Nightly)
                    <input type="checkbox" name="Lts"/>LTS(1.8.2)
                    <h5>Your OS</h5>
                    <input type="checkbox" name="Linux"/>Linux
                    <input type="checkbox" name="Mac"/>Mac
                    <input type="checkbox" name="Windows"/>Windows
                    <h5>Package</h5>
                    <input type="checkbox" name="Conda"/>Conda
                    <input type="checkbox" name="Pip"/>Pip
                    <input type="checkbox" name="Libtorch"/>LibTorch
                    <input type="checkbox" name="Source"/>Source
                    <h5>Language</h5>
                    <input type="checkbox" name="Python"/>Preview(Nightly)
                    <input type="checkbox" name="CJava"/>C++/Java
                    <h5>Compute Plateform</h5>
                    <input type="checkbox" name="Cudaten"/>CUDA 10.2
                    <input type="checkbox" name="Cuda"/>CUDA 11.3
                    <input type="checkbox" name="Rocm"/>ROCM 4.2(beta)
                    <input type="checkbox" name="Cpu"/>CPU
                    <div style={{backgroundColor:"gray;",color:"black;"}}></div>
                </div>
            </div>
        );
    }
 }

 export default Options;