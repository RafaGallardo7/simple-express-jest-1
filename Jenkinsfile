pipeline {
    agent any
    tools {nodejs "NodeJs"}
    triggers {
      pollSCM '*/2 * * * *'
    }
    stages {
        stage("Clonning App") {
            steps {
                echo 'Building...'
                git url: 'https://github.com/RafaGallardo7/simple-express-jest-1', branch: 'main'
                // git url: 'https://github.com/RafaGallardo7/simple-express-jest-1', branch: 'main', credentialsId: 'github_creds'
                sh '''
                echo 'building the application...'       
                npm install
                '''
            }
        }
        stage("Test") {
            steps {
                echo 'Testing...'
                sh '''
                echo 'testing the application...'
                npm test
                '''
            }
        }
        stage("Deliver") {
            steps {
                echo 'Deliver...'
                sh '''
                echo 'deploying the application...'
                npm run dev
                '''
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}