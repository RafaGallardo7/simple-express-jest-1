pipeline {
  agent any
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