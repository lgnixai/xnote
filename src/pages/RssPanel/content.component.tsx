import {useContent} from "~/hooks/use-content.hooks.ts";
import {contentAtom} from "~/atoms/app.atoms.ts";
import {useNews} from "~/hooks/use-news.hooks.ts";

import ReactHtmlParser from 'react-html-parser';
import {Accordion, Group, ScrollArea, Text} from "@mantine/core";
import {Panel} from "~/components/Panel";

const ContentComponent = () => {
   // const content=useContent()
    const {messages} = useContent();

     return (
         <Panel
             title="Create Record"

             rightSection={
                 <Group align="center">

                 </Group>
             }>


             <ScrollArea   style={{
                 position: "absolute",
                 inset: 12,
                 top: 42,
             }}>
             <Text color="dark.0" size="lg">
                 {ReactHtmlParser(messages.content)}
             </Text>
             </ScrollArea>

         </Panel>

    );
};
export default ContentComponent