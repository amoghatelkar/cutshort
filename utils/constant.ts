export const CONSTANTS = {
    EDEN:'Eden',

    ONE:{
        TITLE:"Welcome! First things first...",
        DESRIPTION:"You can always change them later.",
        INPUT:{
            FULLNAME:{
                PLACEHOLDER:"Steve Jobs",
                LABEL:"Full Name",
                NAME:"fullName"
            },
            DISPLAYNAME:{
                PLACEHOLDER:"Steve",
                LABEL:"Display Name",
                NAME:"displayName"
            }
        }
    },

    TWO:{
        TITLE:"Let's set up a home for all your work",
        DESRIPTION:"You can always create another workspace later.",
        INPUT:{
            WORKSPACENAME:{
                PLACEHOLDER:"Eden",
                LABEL:"Workspace Name",
                NAME:"workspaceName"
            },
            WORKSPACEURL:{
                PLACEHOLDER:"Example",
                LABEL:"Workspace URL(optional)",
                NAME:"workspaceURL",
                PREFIX:"www.eden.com/"
            }
        }
    },

    THREE:{
        TITLE:"How are you planning to use Eden?",
        DESRIPTION:"We'll streamline your setup experience accourdingly."
    },

    FOUR:{
        TITLE : (displayName:string) => `Congratulations, ${displayName}!`,
        DESRIPTION:"You have completed the onboarding, you can start using the Eden!"
    },

    BUTTON:{
        CREATE_WORKSPACE:'Create Worksapce',
        LAUNCH_EDEN:"Launch Eden"
    }
}
