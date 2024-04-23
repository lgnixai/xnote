import {useDisclosure} from '@mantine/hooks';
import {Drawer, Button, Table, ScrollArea} from '@mantine/core';
import {useQuery} from "@tanstack/react-query";
import type {IMoleculeContext} from "aixui";
import MainPane from "./main.tsx";
import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState} from "react";
import {
    selectedFeedAtom
} from '~/hooks/use-feeds.hooks.ts';
import {useAtom} from "jotai";

export default function TestPane({context: molecule}: { context: IMoleculeContext }) {
    // const [opened, { open, close }] = useDisclosure(false);
    // const [feedid, setFeedid] = useAtom(selectedFeedAtom);

    const {isPending, error, data} = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://127.0.0.1:6677/api/feeds').then((res) =>
                res.json(),
            ),
    })


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <ScrollArea style={{
            position: "absolute",
            inset: 12,
            top: 40,
            bottom: 54,
            transition: "top .1s"
        }}>
            <Table.ScrollContainer minWidth={500} type="native">
                <Table>

                    <Table.Tbody>
                        {data.map( (element: {
                            id: Key | null | undefined;
                            title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
                        }) => (
                            <Table.Tr key={element.id}>
                                <Table.Td onClick={() => setFeedid(element.id)}>{element.title}</Table.Td>

                            </Table.Tr>))}</Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </ScrollArea>
    );
}
