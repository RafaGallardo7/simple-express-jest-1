pipeline {
  agent any
  tools {
    nodejs "NodeJs"
  }  
  stages {
    stage('Prebuild') {
      steps {
        sh 'ls -la'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}